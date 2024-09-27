'use client';

import * as Yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';

// routes
import { paths } from 'src/routes/paths';
import { useRouter , useSearchParams } from 'src/routes/hooks';

// assets
import { countries } from 'src/assets/data';
// components

import Iconify from 'src/components/iconify';
import FormProvider, {
  RHFTextField,
  RHFAutocomplete,
} from 'src/components/hook-form';
import { t } from 'i18next';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// ----------------------------------------------------------------------

export default function RegisterDetailView () {
  const router = useRouter();

  const searchParams = useSearchParams();

  const email = searchParams.get('email');

  const NewUserSchema = Yup.object().shape({
    firstName: Yup.string().required(t('auth.first_name_required')),
    lastName: Yup.string().required(t('auth.last_name_required')),
    email: Yup.string().required(t('auth.email_required')).email(t('auth.email_valid')),
    phoneNumber: Yup.string().required(t('auth.phone_required')),
    birthDate: Yup.date().required(t('auth.birthday_required')),
    address: Yup.string().required(t('auth.address_required')),
    country: Yup.string().required(t('auth.country_required')),
    state: Yup.string().required(t('auth.state_required')),
    city: Yup.string().required(t('auth.city_required')),
    zipCode: Yup.string().required(t('auth.zip_required')),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: email || '',
    phoneNumber: '',
    birthDate: '',
    address: '',
    country: '',
    state: '',
    city: '',
    zipCode: ''
  }

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      router.push(paths.auth.phoneVerify);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="firstName" label={t('auth.first_name')} />
          <RHFTextField name="lastName" label={t('auth.last_name')} />
        </Stack>
        <RHFTextField name="email" label={t('auth.email_address')} disabled/>
        <RHFTextField name="phoneNumber" label={t('auth.phone_number')} />
        <Controller
          name="birthDate"
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              label={t('auth.birthday')}
              value={field.value}
              onChange={(newValue) => {
                field.onChange(newValue);
              }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: !!error,
                  helperText: error?.message,
                },
              }}
            />
          )}
        />
        <RHFAutocomplete
          name="country"
          label={t('auth.country')}
          options={countries.map((country) => country.label)}
          getOptionLabel={(option) => option}
          isOptionEqualToValue={(option, value) => option === value}
          renderOption={(props, option) => {
            const { code, label, phone } = countries.filter(
              (country) => country.label === option
            )[0];

            if (!label) {
              return null;
            }

            return (
              <li {...props} key={label}>
                <Iconify
                  key={label}
                  icon={`circle-flags:${code.toLowerCase()}`}
                  width={28}
                  sx={{ mr: 1 }}
                />
                {label} ({code}) +{phone}
              </li>
            );
          }}
        />

        <RHFTextField name="state" label={t('auth.state')} />
        <RHFTextField name="city" label={t('auth.city')} />
        <RHFTextField name="address" label={t('auth.address')} />
        <RHFTextField name="zipCode" label={t('auth.zip')} />
        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            {t('auth.create_user')}
          </LoadingButton>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
