import { JSX } from 'react';
import Button from '../components/widgets/button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '../components/widgets/dropdown';
import { Modal, ModalAction, ModalBody, ModalToggle } from '../components/widgets/modal';

export default function Home(): JSX.Element {
  return (
    <>
      <div>h1</div>
      <button className="btn btn-primary glass">foo</button>
      <Button size="lg" theme='success'>fsdf</Button>
      <Dropdown position='bottom' align='end'>
        <DropdownToggle theme='primary'>foo</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <span>aa</span>
          </DropdownItem>
          <DropdownItem>
            <a>aa</a>
          </DropdownItem>
          <DropdownItem>
            <a>aa</a>
          </DropdownItem>
          <DropdownItem>
            <a>aa</a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <ModalToggle id='foo'>foo</ModalToggle>
      <Modal id="foo" >
        <ModalBody>
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </ModalBody>
        <ModalAction>
          <Button>foo</Button>
        </ModalAction>
      </Modal>
    </>
  )
}
