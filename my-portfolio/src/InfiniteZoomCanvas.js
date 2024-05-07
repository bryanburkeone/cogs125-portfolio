import React, { useRef, useState } from 'react';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
import {categories} from './categories';

const InfiniteZoomCanvas = () => {
  const stageRef = useRef(null);
  const [scale, setScale] = useState(1); // Controls the zoom level
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleWheel = (e) => {
    e.evt.preventDefault();
    const scaleBy = 1.05; // Reduced from 1.05 to 1.02 for even less sensitivity
    const stage = stageRef.current;
    const oldScale = stage.scaleX();

    const pointerPosition = stage.getPointerPosition();
    if (!pointerPosition) return;

    const mousePointTo = {
      x: pointerPosition.x / oldScale - stage.x() / oldScale,
      y: pointerPosition.y / oldScale - stage.y() / oldScale,
    };

    const direction = e.evt.deltaY > 0 ? 1 : -1;
    // Smoother scaling effect by using a smaller scaling factor
    const newScale = oldScale * Math.pow(scaleBy, -direction);

    setPosition({
      x: -(mousePointTo.x - pointerPosition.x / newScale) * newScale,
      y: -(mousePointTo.y - pointerPosition.y / newScale) * newScale,
    });
    setScale(newScale);
};


  const renderCategories = () => {
    return categories.map(category => (
      <React.Fragment key={category.id}>
        {scale <= 3 && (
          <>
            <Rect
              width={100}
              height={100}
              fill={category.color}
              x={category.basePosition.x}
              y={category.basePosition.y}
              shadowBlur={5}
            />
            <Image
                
            />
            <Text
              text={category.label}
              fontSize={10}
              x={category.basePosition.x + 10}
              y={category.basePosition.y + 40}
              fill="white"
            />
          </>
        )}
        {category.products.map((product, index) => {
          const productX = category.basePosition.x + index * 150;
          return (
            <React.Fragment key={product.id}>
              {/* Render product details at scale > 3 and <= 6 */}
              {scale > 3 && scale <= 6 && (
                <>
                  <Rect
                    width={50}
                    height={50}
                    fill={product.color}
                    x={productX}
                    y={category.basePosition.y + 50}
                    shadowBlur={2}
                  />
                  <Text
                    text={product.label}
                    fontSize={8}
                    x={productX + 5}
                    y={category.basePosition.y + 105}
                    fill="black"
                  />
                </>
              )}
              {/* Render item details at scale > 6 */}
              {scale > 6 && product.items.map((item, idx) => {
                
                const itemX = productX + idx * 60;
                return (
                  <React.Fragment key={item.id}>
                    <Rect
                      width={40}
                      height={40}
                      fill={item.color}
                      x={itemX}
                      y={category.basePosition.y + 60} // Adjusted position for better visibility
                      shadowBlur={2}
                    />
                    <Text
                      text={item.label}
                      fontSize={5}
                      x={itemX + 5}
                      y={category.basePosition.y + 105} // Adjusted position for text
                      fill="black"
                    />
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    ));
  };
  
  
  

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      scaleX={scale}
      scaleY={scale}
      x={position.x}
      y={position.y}
      draggable
      onWheel={handleWheel}
      ref={stageRef}
    >
      <Layer>
        {renderCategories()}
      </Layer>
    </Stage>
  );
};

export default InfiniteZoomCanvas;
