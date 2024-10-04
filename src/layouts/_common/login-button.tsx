import * as React from 'react';
// @mui
import { Theme, SxProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
// config
import { t } from 'i18next';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useRouter } from 'src/routes/hooks';
// auth
import { useAuthContext } from 'src/auth/hooks';
// ----------------------------------------------------------------------

type Props = {
  sx?: SxProps<Theme>;
};

export default function LoginButton({ sx }: Props) {
  const [open, setOpen] = React.useState(false);
  const password = useBoolean();
  const router = useRouter();

  const { login } = useAuthContext();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const LoginSchema = Yup.object().shape({
    email: Yup.string().required(t("auth.email_required")).email(t("auth.valid_email")),
    password: Yup.string().required(t("auth.pwd_required")),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await login?.(data.email, data.password);
      // handleClose()
      router.push(paths.dashboard.root);
    } catch (error) {
      console.error(error);
    }
  });

  const renderHead = (
    <Stack spacing={2} sx={{ my: 3 }}>
      <Typography variant="h4">{t("auth.sign_app")}</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2">{t("auth.new_user")}</Typography>

        <Link component={RouterLink} href={paths.auth.register} variant="subtitle2">
          {t("auth.create_account")}
        </Link>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={2.5} sx={{ mb: 3 }}>
      <RHFTextField name="email" label={t("auth.email")} />

      <RHFTextField
        name="password"
        label={t("auth.pwd")}
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

      <Link
        component={RouterLink}
        href={paths.auth.forgotPassword}
        variant="body2"
        color="inherit"
        underline="always"
        sx={{ alignSelf: 'flex-end' }}
      >
        {t("auth.forgot_pwd")}
      </Link>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        {t("auth.login")}
      </LoadingButton>
    </Stack>
  );
  return (
    <>
      <Button variant="outlined" sx={{ ml: 6, mr: 2, ...sx }} onClick={handleClickOpen} size="large" color="inherit">
        {t("auth.login")}
      </Button>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <FormProvider methods={methods} onSubmit={onSubmit}>
            {renderHead}

            {renderForm}
          </FormProvider>
        </DialogContent>
      </Dialog>
    </>
  );
}
