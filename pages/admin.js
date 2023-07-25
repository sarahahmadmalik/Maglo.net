import Image from "next/image"

function admin() {
  return (
    <div className="w-[100vw] h-[100vh]">
        <div className="w-full h-full">
            <div>
                <Image src='/assets/maglolologo.svg' width={100} height={100} alt="Maglo Logo"/>
            </div>
        </div>

    </div>
  )
}

export default admin