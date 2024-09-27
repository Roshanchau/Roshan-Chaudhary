"use client"

interface ContainerProps{
    children: React.ReactNode
}

const Container: React.FC<ContainerProps>=({
    children
})=>{
    return(
        <div className={`mx-auto max-w-6xl`}>
            {children}
        </div>
    )
}
    
export default Container