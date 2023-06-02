import { JSX } from 'react';
import Button from '../components/widgets/button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '../components/widgets/dropdown';

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
    </>
  )
}
