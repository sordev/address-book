export const InputComponent = (props: any) => {
  return <div className={'inputContainer'}>
    <label className={'inputLabel'}>{props.label}</label>
    <input
      className={'inputField'}
      onChange={props.onChange}
      value={props.value}
    />
  </div>
}
