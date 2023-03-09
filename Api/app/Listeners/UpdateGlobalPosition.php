<?php

namespace App\Listeners;

use App\Events\CreateOrEditMovement;
use App\Repositories\DashboardRepository;

class UpdateGlobalPosition
{
    protected $repository;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(DashboardRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Handle the event.
     *
     * @param  CreateOrEditMovement  $event
     * @return void
     */
    public function handle(CreateOrEditMovement $event)
    {
        // Add or substract depending on movement type
        if ($event->movement->type === 'entry') {
            return $this->repository->add($event->movement->amount);
        } elseif ($event->movement->type === 'expense') {
            return $this->repository->substract($event->movement->amount);
        }
    }
}
