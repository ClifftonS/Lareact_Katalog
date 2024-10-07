import { Link } from "@inertiajs/react";

const Pagination = ({ links }) => {
    const pages = [];
    let startPage = Math.max(1, links.current_page - 2);
    let endPage = Math.min(links.last_page, links.current_page + 2);
    if (endPage - startPage < 4) {
        if (startPage === 1) {
            endPage = Math.min(startPage + 4, links.last_page);
        } else if (endPage === links.last_page) {
            startPage = Math.max(1, endPage - 4);
        }
    }
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }
    return (
        <>
            <nav
                className="flex justify-center mt-14"
                aria-label="Page navigation example"
            >
                <ul className="flex items-center -space-x-px h-10 text-base">
                    {links.links.length < 8
                        ? links.links.map((link, i) => {
                              if (i != 0 && i != links.links.length - 1) {
                                  return (
                                      <li key={i}>
                                          <Link
                                              href={link.url}
                                              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                                                  link.active
                                                      ? "bg-blue-500"
                                                      : "bg-white"
                                              }`}
                                          >
                                              {link.label}
                                          </Link>
                                      </li>
                                  );
                              }
                          })
                        : links.links.map((link, i) => {
                              if (i == 0) {
                                  return (
                                      <li key={i}>
                                          <Link
                                              href={link.url}
                                              className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                                                  links.current_page == 1 &&
                                                  "hidden"
                                              }`}
                                          >
                                              <span className="sr-only">
                                                  Previous
                                              </span>
                                              <svg
                                                  className="w-3 h-3 rtl:rotate-180"
                                                  aria-hidden="true"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 6 10"
                                              >
                                                  <path
                                                      stroke="currentColor"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M5 1 1 5l4 4"
                                                  />
                                              </svg>
                                          </Link>
                                      </li>
                                  );
                              } else if (i == links.links.length - 1) {
                                  return (
                                      <li key={i}>
                                          <Link
                                              href={link.url}
                                              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                                                  links.current_page ==
                                                      links.last_page &&
                                                  "hidden"
                                              }`}
                                          >
                                              <span className="sr-only">
                                                  Next
                                              </span>
                                              <svg
                                                  className="w-3 h-3 rtl:rotate-180"
                                                  aria-hidden="true"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 6 10"
                                              >
                                                  <path
                                                      stroke="currentColor"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="m1 9 4-4-4-4"
                                                  />
                                              </svg>
                                          </Link>
                                      </li>
                                  );
                              } else if (pages.includes(i)) {
                                  return (
                                      <li key={i}>
                                          <Link
                                              href={link.url}
                                              className={`flex items-center justify-center px-4 h-10 leading-tight text-slate-950 border border-gray-300 hover:bg-slate-200 hover:text-gray-700 ${
                                                  link.active
                                                      ? "bg-blue-500"
                                                      : "bg-white"
                                              }`}
                                          >
                                              {link.label}
                                          </Link>
                                      </li>
                                  );
                              }
                          })}
                </ul>
            </nav>
            <div className="flex justify-center mt-3">
                Page {links.current_page} of {links.last_page}
            </div>
        </>
    );
};

export default Pagination;
