import Button, { ButtonProps } from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';

const Botao2 = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '13rem'
}));

export default function StyledCustomization() {
  return <Botao2 variant='contained'>TESTE 2</Botao2>;
}