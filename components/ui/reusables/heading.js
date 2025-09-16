export default function Heading({ className = "", eyebrow = "", title = "This is a Heading", text = "" }) {

    return (

        <div className={`heading ${className}`}>

            {eyebrow && (
                <div className="eyebrow">

                    <span>{eyebrow}</span>

                </div>
            )}

            <h2>{title}</h2>

            {text && (

                <p dangerouslySetInnerHTML={{ __html: text }} />

            )}

        </div>

    )

}