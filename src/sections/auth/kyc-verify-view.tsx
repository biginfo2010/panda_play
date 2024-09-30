'use client';

import { useRef, useState, useCallback } from "react";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// auth
import { useAuthContext } from 'src/auth/hooks';
import { useRouter, useSearchParams } from 'src/routes/hooks';
// components
import FormProvider, { RHFUpload } from 'src/components/hook-form';
import { t } from 'i18next';
import Webcam from "react-webcam";
import LoadingButton from '@mui/lab/LoadingButton';

export default function KycVerifyView() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const email = searchParams.get('email');

  const { confirmRegister } = useAuthContext();

  // State to toggle webcam views
  const [showLicenseCapture, setShowLicenseCapture] = useState(false);
  const [showSelfieCapture, setShowSelfieCapture] = useState(false);

  // State to hold captured images and uploaded files
  const [licenseImage, setLicenseImage] = useState<string | null>(null);
  const [selfieImage, setSelfieImage] = useState<string | null>(null);
  const [addressDocument, setAddressDocument] = useState<File | null>(null);

  // Refs for webcams
  const webcamRef = useRef<Webcam>(null);

  // Capture from webcam for driver's license
  const captureLicense = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setLicenseImage(imageSrc);
      setShowLicenseCapture(false); // Hide capture section after capturing
    }
  }, [webcamRef]);

  // Capture from webcam for selfie
  const captureSelfie = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setSelfieImage(imageSrc);
      setShowSelfieCapture(false); // Hide capture section after capturing
    }
  }, [webcamRef]);

  // Handle file upload for driver's license and selfie
  const handleLicenseUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setLicenseImage(file);
    }
  };

  const handleSelfieUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setSelfieImage(file);
    }
  };

  const VerifySchemaSchema = Yup.object().shape({
    code: Yup.string().min(6, t("auth.code_length")).required(t("auth.code_required")),
    email: Yup.string().required(t('auth.email_required')),
    coverUrl: Yup.mixed<any>().nullable().required('Cover is required'),
  });

  const defaultValues = {
    code: '',
    email: email || '',
    coverUrl: null,
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(VerifySchemaSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('coverUrl', newFile, { shouldValidate: true });
        setAddressDocument(newFile);
      }
    },
    [setValue]
  );

  const handleRemoveFile = useCallback(() => {
    setValue('coverUrl', null);
    setAddressDocument(null)
  }, [setValue]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      await confirmRegister?.(data.email, data.code);

      // Here you would handle form submission, such as sending the images/files to a server
      console.log("Driver License:", licenseImage);
      console.log("Selfie:", addressDocument);
      console.log("Secondary Document:", selfieImage);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  });

  const renderForm = (
    <Stack spacing={3} alignItems="center">
      <div>
        <h3>Submit a Copy of Your Driver License</h3>
        {licenseImage ? (
          <img src={licenseImage} alt="Driver License" width="300" />
        ) : (
          <>
            {/* eslint-disable-next-line react/button-has-type */}
            <button onClick={() => setShowLicenseCapture(true)}>Capture License Photo</button>
            <input type="file" accept="image/*" onChange={handleLicenseUpload} />
          </>
        )}

        {showLicenseCapture && (
          <div>
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
            {/* eslint-disable-next-line react/button-has-type */}
            <button onClick={captureLicense}>Capture Photo</button>
          </div>
        )}
      </div>

      {/* Secondary Document Section */}
      <div>
        <h3>Submit a Secondary Document (to verify address)</h3>
        <RHFUpload
          name="coverUrl"
          maxSize={3145728}
          onDrop={handleDrop}
          onDelete={handleRemoveFile}
        />
        {addressDocument && <p>File Uploaded: {addressDocument.name}</p>}
      </div>

      {/* Selfie Section */}
      <div>
        <h3>Submit a Selfie</h3>
        {selfieImage ? (
          <img src={selfieImage} alt="Selfie" width="300" />
        ) : (
          <>
            {/* eslint-disable-next-line react/button-has-type */}
            <button onClick={() => setShowSelfieCapture(true)}>Capture Selfie</button>
            <input type="file" accept="image/*" onChange={handleSelfieUpload} />
          </>
        )}

        {showSelfieCapture && (
          <div>
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
            {/* eslint-disable-next-line react/button-has-type */}
            <button onClick={captureSelfie}>Capture Photo</button>
          </div>
        )}
      </div>
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        {t('auth.submit_kyc')}
      </LoadingButton>

    </Stack>
  );

  const renderHead = (
    <Stack spacing={1} sx={{ my: 5 }}>
      <Typography variant="h3">{t('auth.kyc_form')}</Typography>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderHead}
      {renderForm}
    </FormProvider>
  );
}
