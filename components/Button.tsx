import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  to?: string;
  onClick?: () => void;
  className?: string;
  href?: string;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '', 
  href,
  icon = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold transition-all duration-300 rounded-none tracking-wide font-heading group";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-sm",
    secondary: "bg-secondary text-white hover:bg-primary",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    white: "bg-white text-primary hover:bg-light"
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={combinedClasses}>{content}</Link>;
  }

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>{content}</a>;
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};

export default Button;