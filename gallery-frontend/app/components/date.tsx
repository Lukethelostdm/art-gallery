export default function Year() {
    const date = new Date()
    const year = date.getFullYear()

    return(
        <>
            <div>
                {year}
            </div>
        </>
    )
}