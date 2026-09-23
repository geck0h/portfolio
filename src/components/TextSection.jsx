const TextSection = ({ title, children }) => (
  <div className='inline-block align-top w-70 h-70 max-2xl:w-100 max-2xl:h-50 max-sm:w-80 max-sm:h-auto rounded-xl mr-10 mb-10 p-4 shadow-xl shadow-gray-400'>
    <h2 className='text-lg font-bold pb-1'>{title}</h2>
    <p className='text-md'>{children}</p>
  </div>
);

export default TextSection;