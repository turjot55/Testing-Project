import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";


const AddSection = () => {
  const navigate = useNavigate()
  const { state } = useLocation();
  const { id } = useParams();
  const [sectionName, setSectionName] = useState("");
  const [sectionSelect, setSectionSelect] = useState("1");
  const [isTermAccepted, setIsTermAccepted] = useState(false);

  const handleChangeSectionName = (event) => {
    setSectionName(event.target.value);
  }

  const handleSectionSelect = (event) => {
    setSectionSelect(event.target.value);
  }

  const handleTerms = (event) => {
    if(event.target.checked) {
      setIsTermAccepted(true);
    } else {
      setIsTermAccepted(false);
    }
  }

  async function postSection(url = '') {
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: sectionName,
        sector: sectionSelect,
        termsAgreed: isTermAccepted ? 1 : 0,
      }),
    });
    return response.json();
  }

  async function putSection(url = '') {
    const response = await fetch(url, {
      method: 'PUT', 
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        name: sectionName,
        sector: sectionSelect,
        termsAgreed: isTermAccepted ? 1 : 0,
      }),
    });
    return response.json();
  }
  
  const onSubmit = async () => {
    if(id) {
      const result = await putSection('http://localhost:3001/update');
      if(result.status === 200) {
        navigate("/");
      }
    } else {
      const result = await postSection('http://localhost:3001/add');
      if(result.status === 200) {
        navigate("/");
      }
    }
  }

  const onCancel = () => {
    navigate("/");
  }

  useEffect(() => {
    if(state) {
      setSectionName(state.name);
      setSectionSelect(state.sector);
      if(state.termsAgreed == 1) {
        setIsTermAccepted(true);
      } else {
        setIsTermAccepted(false);
      }
    }
  }, [state])
  
  return(
    <div className="Add-section-container">
      <h1 className="header">Add Section</h1>
      <div className="Add-section-form">
        <div className="row">
          <div>
            <span className="label">Please enter your name and pick the Sectors you are currently involved in.</span>
          </div>
          <div>
            <input type="text" placeholder="Section Name" value={sectionName} onChange={handleChangeSectionName}/>
          </div>
        </div>
        <div className="row">
          <select value={sectionSelect} onChange={handleSectionSelect}>
            <option value="1">Manufacturing</option>
            <option value="19">&nbsp;&nbsp;&nbsp;&nbsp;Construction materials</option>
            <option value="18">&nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics</option>
            <option value="6">&nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage</option>
            <option value="342">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp; confectionery products</option>
            <option value="43">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages</option>
            <option value="42">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish products </option>
            <option value="40">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat products</option>
            <option value="39">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy products </option>
            <option value="437">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
            <option value="378">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp; snack food</option>
            <option value="13">&nbsp;&nbsp;&nbsp;&nbsp;Furniture</option>
            <option value="389">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna </option>
            <option value="385">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom</option>
            <option value="390">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Childrenâ€™s room </option>
            <option value="98">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen </option>
            <option value="101">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room </option>
            <option value="392">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office</option>
            <option value="394">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Furniture)</option>
            <option value="341">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor </option>
            <option value="99">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project furniture</option>
            <option value="12">&nbsp;&nbsp;&nbsp;&nbsp;Machinery</option>
            <option value="94">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery components</option>
            <option value="91">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery equipment/tools</option>
            <option value="224">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture of machinery </option>
            <option value="97">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maritime</option>
            <option value="271">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminium and steel workboats </option>
            <option value="269">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht building</option>
            <option value="230">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship repair and conversion</option>
            <option value="93">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal structures</option>
            <option value="508">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
            <option value="227">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and maintenance service</option>
            <option value="11">&nbsp;&nbsp;&nbsp;&nbsp;Metalworking</option>
            <option value="67">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of metal structures</option>
            <option value="263">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and buildings</option>
            <option value="267">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal products</option>
            <option value="542">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works</option>
            <option value="75">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining</option>
            <option value="62">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings, Fasteners </option>
            <option value="69">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas, Plasma, Laser cutting</option>
            <option value="66">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG, TIG, Aluminum welding</option>
            <option value="9">&nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber</option>
            <option value="54">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging</option>
            <option value="556">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods</option>
            <option value="559">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic processing technology</option>
            <option value="55">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing</option>
            <option value="57">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding</option>
            <option value="53">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics welding and processing</option>
            <option value="560">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles</option>
            <option value="5">&nbsp;&nbsp;&nbsp;&nbsp;Printing </option>
            <option value="148">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising</option>
            <option value="150">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals printing</option>
            <option value="145">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and packaging printing</option>
            <option value="7">&nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing</option>
            <option value="44">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing</option>
            <option value="45">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile</option>
            <option value="8">&nbsp;&nbsp;&nbsp;&nbsp;Wood</option>
            <option value="337">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)</option>
            <option value="51">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building materials</option>
            <option value="47">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses</option>
            <option value="3">Other</option>
            <option value="37">&nbsp;&nbsp;&nbsp;&nbsp;Creative industries</option>
            <option value="29">&nbsp;&nbsp;&nbsp;&nbsp;Energy technology</option>
            <option value="33">&nbsp;&nbsp;&nbsp;&nbsp;Environment</option>
            <option value="2">Service</option>
            <option value="25">&nbsp;&nbsp;&nbsp;&nbsp;Business services</option>
            <option value="35">&nbsp;&nbsp;&nbsp;&nbsp;Engineering</option>
            <option value="28">&nbsp;&nbsp;&nbsp;&nbsp;Information Technology and Telecommunications</option>
            <option value="581">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data processing, Web portals, E-marketing</option>
            <option value="576">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming, Consultancy</option>
            <option value="121">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software, Hardware</option>
            <option value="122">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications</option>
            <option value="22">&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>
            <option value="141">&nbsp;&nbsp;&nbsp;&nbsp;Translation services</option>
            <option value="21">&nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics</option>
            <option value="111">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air</option>
            <option value="114">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail</option>
            <option value="112">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road</option>
            <option value="113">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water</option>
          </select>
        </div>
        <div className="row">
          <div>
            <input type="checkbox" checked={isTermAccepted} onChange={handleTerms} />
            <label> I agree to the Terms and Conditions</label>
          </div>
        </div>
      </div>
      <div className="section-form-footer">
        <button className="save-button" onClick={onSubmit}>Save</button>
        <button className="cancel-button" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default AddSection;