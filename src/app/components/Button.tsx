const style = {
  color: 'red',
}

const nome = 'Zenha'

interface ButtonProps {
  tittle: string
}

export function Button(props: ButtonProps) {
  return (
    <p style={style}>
      {props.tittle}
    </p>
  )
}