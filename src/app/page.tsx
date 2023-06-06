"use client";
import { JSX } from 'react';
import { Accordion, AccordionBody, AccordionTitle } from '../components/widgets/accordion';
import { Alert, AlertAction } from '../components/widgets/alert';
import { Badge } from '../components/widgets/badge';
import { Button } from '../components/widgets/button';
import { Card, CardAction, CardBody, CardFigure } from '../components/widgets/card';
import { Checkbox } from '../components/widgets/checkbox';
import { Collapse, CollapseBody, CollapseTitle } from '../components/widgets/collapse';
import { Divider } from '../components/widgets/divider';
import { closeDrawer, Drawer, openDrawer } from '../components/widgets/drawer';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '../components/widgets/dropdown';
import { Indicator, IndicatorBody, IndicatorItem } from '../components/widgets/indicator';
import { Input } from '../components/widgets/input';
import { Kbd } from '../components/widgets/kbd';
import { closeModal, Modal, ModalAction, ModalBody, openModal } from '../components/widgets/modal';
import { Progress } from '../components/widgets/progress';
import { Radio } from '../components/widgets/radio';
import { Range } from '../components/widgets/range';
import { Textarea } from '../components/widgets/textarea';
import { Toggle } from '../components/widgets/toggle';

export default function Home(): JSX.Element {
  return (
    <>
      <Button size="lg" theme='success'>fsdf</Button>
      <Dropdown position='bottom'>
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

      <Button onClick={() => openModal("foo")}>Modal</Button>
      <Modal id="foo" backdrop>
        <ModalBody>
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </ModalBody>
        <ModalAction>
          <Button onClick={() => closeModal("foo")}>foo</Button>
        </ModalAction>
      </Modal>

      <Accordion id="aa">
        <AccordionTitle>Click</AccordionTitle>
        <AccordionBody>foo</AccordionBody>
      </Accordion>
      <Accordion id="aa">
        <AccordionTitle>Click</AccordionTitle>
        <AccordionBody>foo</AccordionBody>
      </Accordion>
      <Accordion id="aa">
        <AccordionTitle>Click</AccordionTitle>
        <AccordionBody>foo</AccordionBody>
      </Accordion>

      <Alert theme='info'>
        <span>foo</span>
      </Alert>
      <Alert theme='error'>
        <span>foo</span>
        <AlertAction>
          <Button size="sm">foo</Button>
          <Button size="sm">foo</Button>
        </AlertAction>
      </Alert>

      <Badge>default</Badge>
      <Badge theme="neutral">neutral</Badge>
      <Badge theme="primary">primary</Badge>
      <Badge theme="secondary">secondary</Badge>
      <Badge theme="accent">accent</Badge>
      <Badge theme="ghost">ghost</Badge>

      <div className="w-96">
        <Card>
          <CardFigure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </CardFigure>
          <CardBody>
            <h2 className="text-2xl">fdfds</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <CardAction>
              <button className="btn btn-primary">Buy Now</button>
            </CardAction>
          </CardBody>
        </Card>
      </div>

      <Collapse>
        <CollapseTitle>Click to open</CollapseTitle>
        <CollapseBody>Text</CollapseBody>
      </Collapse>
      <Collapse>
        <CollapseTitle>Click to open</CollapseTitle>
        <CollapseBody>Text</CollapseBody>
      </Collapse>
      <Collapse>
        <CollapseTitle>Click to open</CollapseTitle>
        <CollapseBody>Text</CollapseBody>
      </Collapse>
      <Collapse>
        <CollapseTitle>Click to open</CollapseTitle>
        <CollapseBody>Text</CollapseBody>
      </Collapse>

      <Kbd>A</Kbd>
      <Progress theme='error' value={20} max={100}></Progress>
      <Checkbox theme='error' />
      <Radio theme='error' />
      <Range min={0} max={10} theme='error' />
      <Input labelTopLeft='tleft' labelTopRight='tright' labelBottomLeft='bleft' labelBottomRight='bright' theme='accent' />
      <Textarea labelTopLeft='tleft' labelTopRight='tright' labelBottomLeft='bleft' labelBottomRight='bright' theme='accent' />
      <Toggle theme='error' />
      <Divider>fdfd</Divider>

      <Button onClick={() => openDrawer("drawer")}>foo</Button>
      <Drawer right id="drawer">
        fsdfsaf
        <Button onClick={() => closeDrawer("drawer")}>foo</Button>
      </Drawer>

      <Indicator>
        <IndicatorItem>
          <Badge>12</Badge>
        </IndicatorItem>
        <IndicatorBody>
          <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </IndicatorBody>
      </Indicator>

      <div className="join">
        <div className="join-item"><div className='btn'>fdf</div></div>
        <div className="join-item"><div className='btn'>aas</div></div>
        <div className="join-item"><div className='btn'>fd</div></div>
      </div>
    </>
  )
}
