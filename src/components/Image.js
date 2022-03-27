const Image = () => {
  return (
    <div className="relative">
      <img className="lg:h-screen h-[211.11px] w-full object-cover" src="/assets/image.jpg" alt="background" />
      <div className="absolute bg-black py-5 flex items-center justify-center w-full lg:bg-opacity-70 bg-opacity-50 lg:top-[20%] top-0">
        <img className="lg:w-32 w-28 pb-5" src="/assets/logo.png" alt="odin logo" />
        <div id="odin" className="text-white text-8xl">ODIN</div>
      </div>
      <div className="absolute lg:bottom-3 bottom-1 flex items-center space-x-1 justify-center w-full text-white">
        <span>Photo by</span>
        <span>
            <a className="underline underline-offset-2" href="https://unsplash.com/@haliewestphoto">Halie West</a>
        </span>
        <span>on</span>
        <span>
            <a className="underline underline-offset-2" href="https://unsplash.com">Unsplash</a>
        </span>
      </div>
    </div>
  )
}

export default Image
