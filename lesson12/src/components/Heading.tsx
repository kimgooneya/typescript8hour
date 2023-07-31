import { ReactElement } from "react"

type HeadProps = { title: string }

const Heading = ({ title }: HeadProps): ReactElement => {
    return (
        <h1>{title}</h1>
    )
}

export default Heading