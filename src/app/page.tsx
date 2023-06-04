"use client";
import { JSX } from 'react';
import { Accordion, AccordionBody, AccordionTitle } from '../components/widgets/accordion';
import { Alert, AlertAction } from '../components/widgets/alert';
import { Badge } from '../components/widgets/badge';
import { Button } from '../components/widgets/button';
import { Card, CardAction, CardBody, CardFigure } from '../components/widgets/card';
import { Collapse, CollapseBody, CollapseTitle } from '../components/widgets/collapse';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '../components/widgets/dropdown';
import { Kbd } from '../components/widgets/kbd';
import { closeModal, Modal, ModalAction, ModalBody, openModal } from '../components/widgets/modal';
import { Progress } from '../components/widgets/progress';

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
    </>
  )
}
