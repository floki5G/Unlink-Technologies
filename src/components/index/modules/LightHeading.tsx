export function LightHeading({
    title,
}: {
    title: string | number
}) {
    return (
        <p
            style={{
                color: "rgba(255, 255, 255, 0.5)",
            }}
            className=" text-sm  "
        >
            {title}
        </p>
    );
}