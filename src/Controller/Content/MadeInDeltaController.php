<?php
namespace App\Controller\Content;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MadeInDeltaController extends AbstractController {
    
    /**
     * @Route("/made-in-delta")
     */
    public function index():Response {
        return $this->render('content/made-in-delta.html.twig', [
            'title' => '#MadeInDelta',
        ]);
    }
}