import { useState } from 'react';
import { usePopper } from 'react-popper';

const Tooltip = () => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  return (
    <>
      <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        Popper element
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </>
  );
};

export default Tooltip;