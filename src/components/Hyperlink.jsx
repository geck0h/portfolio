const Hyperlink = ({ src, children }) => (
  <a href={src} target='_blank' rel='noopener noreferrer'
  className='transition-all ease-[cubic-bezier(0.41,-0.2, 0.61, 1.17)] 0.2s p-0.2 border-b-2 hover:border-b-4 border-b-blue-400'>{children}</a>
);

export default Hyperlink;