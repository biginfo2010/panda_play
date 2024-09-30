'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { t } from 'i18next';

// ----------------------------------------------------------------------

export default function RegisterView() {
  const { register } = useAuthContext();

  const [errorMsg, setErrorMsg] = useState('');

  const router = useRouter();

  const password = useBoolean();
  const confirmPassword = useBoolean();

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().required(t("auth.email_required")).email(t("auth.valid_email")),
    password: Yup.string()
      .required(t('auth.pwd_required'))
      .min(12, t('auth.pwd_length'))
      .test(
        'is-strong',
        t('auth.pwd_strength'), // Custom error message
        value =>
          /[A-Z]/.test(value) && // At least one uppercase letter
          /[a-z]/.test(value) && // At least one lowercase letter
          /\d/.test(value) &&    // At least one number
          /[@$!%*^?&#)(-+_=~`]/.test(value) // At least one special character
      ),
    confirmPassword: Yup.string().required(t('auth.confirm_pwd_required')).oneOf([Yup.ref('password')], t('auth.pwd_mismatch')),
  });

  const defaultValues = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      // await register?.(data.email, data.password, "null", "null");
      await new Promise((resolve) => setTimeout(resolve, 500));
      const searchParams = new URLSearchParams({
        email: data.email,
      }).toString();

      const href = `${paths.auth.verify}?${searchParams}`;

      router.push(href);
    } catch (error) {
      console.error(error);
      reset();
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2"> {t("auth.already_account")} </Typography>

        <Link href="/" component={RouterLink} variant="subtitle2">
          {t("auth.login")}
        </Link>
      </Stack>
    </Stack>
  );

  const renderTerms = (
    <Typography
      component="div"
      sx={{
        color: 'text.secondary',
        mt: 2.5,
        typography: 'caption',
        textAlign: 'center',
      }}
    >
      {t('auth.agree')}
      <Link underline="always" color="text.primary">
        {t('auth.terms')}
      </Link>
      {t('auth.and')}
      <Link underline="always" color="text.primary">
        {t('policy')}
      </Link>
      .
    </Typography>
  );

  const renderForm = (
    <Stack spacing={2.5}>
      {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

      {/* <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}> */}
      {/*  <RHFTextField name="firstName" label="First name" /> */}
      {/*  <RHFTextField name="lastName" label="Last name" /> */}
      {/* </Stack> */}

      <RHFTextField name="email" label={t('auth.email_address')} />

      <RHFTextField
        name="password"
        label={t('auth.pwd')}
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <RHFTextField
        name="confirmPassword"
        label={t('auth.pwd_confirm')}
        type={confirmPassword.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={confirmPassword.onToggle} edge="end">
                <Iconify icon={confirmPassword.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        {t("auth.create_account")}
      </LoadingButton>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderHead}

      {renderForm}

      {renderTerms}
    </FormProvider>
  );
}
