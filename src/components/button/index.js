import { Default, Rounded } from './styles'

const Button = (props) => {
  const { children, style = 'default' } = props

  return style === 'rounded' ? (
    <Rounded {...props}>{children}</Rounded>
  ) : (
    <Default {...props}>{children}</Default>
  )
}

export default Button
