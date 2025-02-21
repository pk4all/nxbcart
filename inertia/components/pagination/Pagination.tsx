import { Link } from '@inertiajs/react';
import classNames from 'classnames';

export default function Pagination({meta,baseUrl}:any) {
  
  if (meta?.lastPage === 1) return null;
  return (
    <div className="flex flex-wrap mt-6 -mb-1">
        <PaginationItem key={'page_first'} label={'First'} url={meta?.firstPageUrl} active={meta?.currentPage==meta?.firstPage?true:false} />
        <PaginationItem key={'page_prev'} label={'Previous'} url={meta?.previousPageUrl} active={false} />
        {/* <PaginationNumber meta={meta} baseUrl={baseUrl}/> */}
        {PaginationNumber(meta).map((page, index) => (
          <PaginationItem key={index} label={page} url={baseUrl+'?page='+page} active={meta?.currentPage==page?true:false} />
        ))}
        <PaginationItem key={'page_Next'} label={'Next'} url={meta?.nextPageUrl} active={false} />
        <PaginationItem key={'page_Last'} label={'Last'} url={meta?.lastPageUrl} active={meta?.currentPage==meta?.lastPage?true:false} />
    </div>
  );
}

function PaginationNumber(meta:any){
  let pElement =[];
    const pageNumbers = [];
    const firstPage = 1;
    const lastPage = meta?.totalPages;
    const startPage = Math.max(meta?.firstPage, meta?.currentPage - Math.floor(10 / 2));
    const endPage = Math.min(meta?.lastPage, startPage + 10 - 1);
    if (startPage > firstPage) {
      pageNumbers.push(firstPage);
      if (startPage > firstPage + 1) pageNumbers.push('...');
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    if (endPage < lastPage) {
      if (endPage < lastPage - 1) pageNumbers.push('...');
      pageNumbers.push(lastPage);
    }
    console.log(pageNumbers,'pageNumbers',meta);
    return pageNumbers;
    //   for (let index = 1; index <= meta?.lastPage; index++) {
    //     pElement.push(<PaginationItem key={'page_'+index} label={index} url={baseUrl+'?page='+index} active={meta?.currentPage==index?true:false} />);
  //   }

  // return <>{pElement}</>;
}

function PaginationItem({active, label, url,disabled }:any) {
  const className = classNames(
    [
      'mr-1 mb-1',
      'paging',
      'border border-solid border-gray-300 rounded',
      'text-sm',
      'hover:bg-white',
      'focus:outline-none focus:border-indigo-700 focus:text-indigo-700'
    ],
    {
      'bg-white active_paging':active
    }
  );
  return (
    <>
    {disabled ? <span className="mr-1 mb-1 paging border border-solid border-gray-300 rounded text-sm">...</span>:
    <Link className={className} href={url as string}>
      <span>{label}</span>
    </Link>
  }
    </>
    
  );
}
