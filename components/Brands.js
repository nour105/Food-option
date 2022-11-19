import Link from 'next/link';
import Image from 'next/image';
import Counter from './Counter';



function Brands() {
  return (
    <div>
      <div className='brandss'
        style={{
          backgroundImage: `url(/mask.jpg)`, 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          padding: "75px 20px",
          minWidth: "100%"

        }}>
            <div>
            <Image src="/M.jpg" width="40" height="40" alt="M" />
            </div>
            <div className="h1-style">
                <h1>OUR BRANDS</h1>
            </div>
            <div className='pulet'>
            <Image src="/group2.jpg" width="120" height="40" alt="grp" />
            </div>
       </div>
      <Counter />
    </div>
  );
}
export default Brands;