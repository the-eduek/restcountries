function Message({ failure, success }) {
  return (
    <div className="h-screen w-full absolute top-0 left-0 flex flex-col items-center justify-center">
      { success &&
        <div>
          <div className="spinner">
            <div className="spinner__hand"></div>
            <div className="spinner__child"></div>
          </div> 
          <p className="py-1 text-base font-normal">Loading...</p>
        </div>
      }
      { failure && <p className="py-1 text-base font-normal">{ failure.toLowerCase() } 🙁</p> }
    </div>
  )
}
 
export default Message;