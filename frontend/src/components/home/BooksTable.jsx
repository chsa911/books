import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>eindat</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            autor
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Publish Year
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            //comx
            <td className='border border-slate-700 rounded-md text-center'>
              {book.eindat}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.entdat}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.verdat}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.enddat}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.autor}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.keyw}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.kwp}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.verl}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.seit}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.lesevs}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.genre}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.gengen}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.kont}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.land}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.them}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.them0}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.them1}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.hauper}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.hauper0}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.zeit}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.amalin}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.pos}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.mark}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.markrang}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.topw}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.belber}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.gesw}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.zust}
            </td>

            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
