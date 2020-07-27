import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
    align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
`

export default Flex
