<?php
namespace App\Controller\Content;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AboutController extends AbstractController {
    
    /**
     * @Route("/about")
     */
    public function index():Response {
        return $this->render('content/about.html.twig', [
            'title' => 'About DTC',
        ]);
    }
}