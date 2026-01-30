import React , {useState} from 'react'
import './Filters.scss'
import { Accordion, Form } from 'react-bootstrap'
import { Slider } from 'antd';

const Filters = () => {
 const [priceRange, setPriceRange] = useState([500, 500000]);
 
  return (
    <div className='filtersMainDiv'>
      <Accordion defaultActiveKey="0" className="custom-accordion w-100">
        {/* Categories */}
        <Accordion.Item eventKey="0">
          <Accordion.Header >
            <div className='d-flex justify-content-between'>
              <div>Categories</div>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            This is the collapsible content.
          </Accordion.Body>
        </Accordion.Item>

        {/* Price */}
       <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div>Price</div>
          </Accordion.Header>

          <Accordion.Body>
            <div>
              <div className='filterPriceDiv'>
                <div>
                  <span className='filterFromText'>From </span>
                  <span className='filterSectionPrice'>₹{priceRange[0]}</span>
                </div>
                <div>
                  <span className='filterFromText'>To </span>
                  <span className='filterSectionPrice'>₹{priceRange[1]}</span>
                </div>
              </div>

              <Slider
                range
                min={500}
                max={500000}
                step={500}
                value={priceRange}
                onChange={setPriceRange}
              />

              <div className='d-flex justify-content-between'>
                <div className='filterPriceText'>₹{priceRange[0]}</div>
                <div className='filterPriceText'>₹{priceRange[1]}</div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* Brands */}
        <Accordion.Item eventKey="2">
          <Accordion.Header >
            <div className='d-flex justify-content-between'>
              <div>Brands</div>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            This is the collapsible content.
          </Accordion.Body>
        </Accordion.Item>

        {/* Tags */}
        <Accordion.Item eventKey="3">
          <Accordion.Header >
            <div className='d-flex justify-content-between'>
              <div>Tags</div>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            <Form>
              <div className='chkDiv'>
                <Form.Check label="New Air Rifles" name="group1" type="checkbox" id={`inline-checkbox-1`} />
                <Form.Check label="New Air Pistols" name="group1" type="checkbox" id={`inline-checkbox-2`} />
                <Form.Check label="Popular Air Rifles" name="group1" type="checkbox" id={`inline-checkbox-3`} />
                <Form.Check label="Popular Air Rifles" name="group1" type="checkbox" id={`inline-checkbox-4`} />
                <Form.Check label="Popular Air Rifles" name="group1" type="checkbox" id={`inline-checkbox-5`} />
                <Form.Check label="Popular Air Rifles" name="group1" type="checkbox" id={`inline-checkbox-6`} />
              </div>
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        {/* Certification */}
        <Accordion.Item eventKey="4">
          <Accordion.Header >
            <div className='d-flex justify-content-between'>
              <div>Certification</div>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            <Form>
              <div className='chkDiv'>
                <Form.Check label="Hub Approved" name="group1" type="checkbox" id={`inline-checkbox-1`} />
                <Form.Check label="Hub Certified" name="group1" type="checkbox" id={`inline-checkbox-2`} />
              </div>
            </Form>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  )
}

export default Filters