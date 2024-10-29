export default function ArticleCard({ id, title, date, img }) {
  return (
    <div className="mb-4 h-full min-w-[280px] max-w-[410px] min-h-[610px] rounded-b-md transition-transform duration-300 transform hover:-translate-y-2 shadow-md overflow-hidden">
      <div className="border-0 h-full flex flex-col">
        <a href={`/articles/${id}`}>
          <img
            src={img}
            alt={title}
            className="object-cover w-[410px] h-[410px] rounded-t-md"
          />
        </a>
        <div className="flex flex-col justify-between p-4">
          <h5 className="font-bold text-xl text-[--dark] my-2">
            <a href={`/articles/${id}`}>{title}</a>
          </h5>
          <p className="text-[--gray] text-sm my-3">
            <i className="far fa-clock mr-2"></i>
            {date}
          </p>
          <a
            className="text-[--primary] uppercase font-bold tracking-[.3rem] text-sm hover:text-[--red] hover:underline align-text-bottom justify-end"
            href={`/articles/${id}`}
          >
            Lanjutkan membaca <i className="fa fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
