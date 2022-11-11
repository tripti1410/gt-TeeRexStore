import './sidebar.scss';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__category">
        <div className="sidebar__heading">
          Type
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-up"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>
        <div className="sidebar__options">
          <label className="check">
            <input type="checkbox" className="check__input" />
            <span className="check__checkbox">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6.5L9 17.5L4 12.5"
                  stroke="#fff"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="check__text">Polo</p>
          </label>
          <label className="check">
            <input type="checkbox" className="check__input" />
            <span className="check__checkbox">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6.5L9 17.5L4 12.5"
                  stroke="#fff"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="check__text">Hoodie</p>
          </label>
          <label className="check">
            <input type="checkbox" className="check__input" />
            <span className="check__checkbox">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6.5L9 17.5L4 12.5"
                  stroke="#fff"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="check__text">Basic</p>
          </label>
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;
