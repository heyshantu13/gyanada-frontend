import { Link } from "react-router-dom";
import StripedTable from "../components/Table";
import { useEffect, useState } from "react";
import AddAgent from "../components/AddAgent";
import { userRequest } from "../http/axiosInterceptors";
import Button from "react-bootstrap/Button";
import { showPageLoader } from "../redux/loaderSlice";
import { useDispatch } from "react-redux";

const MyAgents = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [agents, setAgents] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredAgents, setFilteredAgents] = useState([]); 
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllAgents = async () => {
      try {
        const response = await userRequest.get(
          `/user/agent/list?page=${currentPage}&limit=10`
        );

        const { data } = response.data;
        const { totalCount } = data;
        setAgents(data.agents);
        setTotalPages(Math.ceil(totalCount / 10)); 
      } catch (error) {
        console.log(error);
      }
    };
    getAllAgents();
  }, [currentPage]);

  useEffect(() => {
    const searchAgent = async () => {
      const response = await userRequest.get(
        `/user/agent/list?page=${currentPage}&limit=10&search=${searchQuery}`
      );
      setFilteredAgents(response.data.data.agents);
    }
    searchAgent();
  
  }, [searchQuery, agents]);

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="base--container relative">
      <div className="wrapper">
        <div>
          <h4>Agent Manager</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin/agents">Dashboard/ Agents</Link>
              </li>
            </ol>
          </nav>
        </div>
        <button onClick={() => setIsModalActive(true)} className="btn btn-dark">
          Add Agent
        </button>
      
      </div>
      <div className="base--container">
        {/* Search input field */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search agents by Name,Email,Number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <StripedTable
          columns={[
            { Header: "Sr. No", accessor: "id" },
            { Header: "Photo", accessor: "photo" },
            { Header: "Name", accessor: "fullname" },
            { Header: "Email", accessor: "email" },
            { Header: "Phone", accessor: "mobile" },
            { Header: "Address", accessor: "address" },
          ]}
          data={filteredAgents} // Use the filtered agents data instead of the original agents data
        />
        <div className="pagination--container">
          {/* Pagination */}
          <Button
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </Button>
          {generatePageNumbers().map((pageNumber) => (
            <Button
              key={pageNumber}
              size="sm"
              variant={
                currentPage === pageNumber ? "primary" : "outline-primary"
              }
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </Button>
          ))}
          <Button
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </div>
      </div>
      {isModalActive && <AddAgent setIsModalActive={setIsModalActive} />}
    </div>
  );
};

export default MyAgents;
