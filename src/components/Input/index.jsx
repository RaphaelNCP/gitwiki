import { InputContainer } from "./styles"


const Input = ({value, onChange}) => {
    return (
        <InputContainer value={value} onChange={onChange}>
            <input placeholder="@user/repository"/>
        </InputContainer>
    )
}

export default Input