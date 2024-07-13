import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // Дополнительные матчеры для Jest
import Carousel from '../components/Carousel/Carousel';
import { useRouter } from 'next/router';

// Мокируем маршрутизатор Next.js
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
  }));

describe('Carousel component', () => {

    let push: jest.Mock;
    let onRegionChange: jest.Mock;
    let activeRegion: string = 'kanto';

    //const mockRouter = useRouter();

  beforeEach(() => {
    onRegionChange = jest.fn();
    push = jest.fn();
    // Устанавливаем мок-реализацию useRouter
    (useRouter as jest.Mock).mockReturnValue({ push });

  });

    // Smoke Test: Проверяем, что компонент рендерится без ошибок
    test('renders correctly', () => {
        render(<Carousel 
            activeRegion={activeRegion}
            onRegionChange={onRegionChange}
        />)

        expect(screen.getByAltText("Kanto")).toBeInTheDocument()
        // expect(screen.getByAltText("tokyo")).not.toBeInTheDocument()
    })

    test("button down click", () => {
        render(<Carousel activeRegion={activeRegion} onRegionChange={onRegionChange}/>);

        const button = screen.getByText("Down");
        fireEvent.click(button);

        expect(screen.getByAltText("Tohoku")).toBeInTheDocument();
        expect(onRegionChange).toHaveBeenCalledWith(activeRegion);
        expect(onRegionChange).toHaveBeenCalledWith("tohoku");
    })

    test("button up click", () => {
        render(<Carousel activeRegion={activeRegion} onRegionChange={onRegionChange}/>);

        const button = screen.getByText("Up");
        fireEvent.click(button);

        expect(screen.getByAltText("Chubu")).toBeInTheDocument();
        expect(onRegionChange).toHaveBeenCalledWith(activeRegion);
        expect(onRegionChange).toHaveBeenCalledWith("chubu");
    })

    test('updates currentIndex when activeRegion changes', () => {
        render(<Carousel activeRegion={activeRegion} onRegionChange={onRegionChange}/>);

        const button = screen.getByText("Up");
        fireEvent.click(button);

        expect(screen.getByAltText("Chubu")).toBeInTheDocument();
        expect(onRegionChange).toHaveBeenCalledWith(activeRegion);
        expect(onRegionChange).toHaveBeenCalledWith("chubu");
    })

    test('navigates to the correct URL on image click', () => {
        // Рендерим компонент
        render(<Carousel activeRegion={activeRegion} onRegionChange={onRegionChange} />);
        
        // Находим изображение с alt текстом "Kanto" и получаем ближайший элемент <a>
        const imgElement = screen.getByAltText(/Kanto/i);
        const linkElement = imgElement.closest('a');
        
        // Проверяем, что ссылка действительно найдена
        expect(linkElement).not.toBeNull(); // Или можно использовать expect(linkElement).toBeInTheDocument(); если элемент всегда должен быть найден
      
        if (linkElement) {
          // Симулируем клик по ссылке
          fireEvent.click(linkElement);
      
          // Проверяем, что функция push была вызвана с правильным URL
          expect(push).toHaveBeenCalledWith('/kanto');
        }
      });
      

})
