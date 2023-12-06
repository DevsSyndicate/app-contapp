<?php

namespace App\Movements\Infrastructure\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Categories\Domain\Models\Category;
use App\Accounts\Domain\Models\Account;

class MovementsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $category = Category::where('id', $this->category)->first();

        if ($category) {
            $this->merge(['category_id' => $category->id]);
        }

        $account = Account::where('id', $this->account)->first();

        if ($account) {
            $this->merge(['account_id' => $account->id]);
        }

        // Convert "date" field to "Y-m-d H:i:s" format if it exists
        if ($this->filled('date')) {
            if ($this->filled('date')) {
                $date = \DateTime::createFromFormat('d-m-Y', $this->input('date'));
                $dateFormatted = $date->format('Y-m-d');
                $this->merge(['date' => $dateFormatted]);
            } else {
                $this->merge(['date' => date('Y-m-d')]);
            }
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'date' => 'required',
            'type' => 'required',
            'amount' => 'required',
            'category_id' => 'required',
            'account_id' => 'required',
        ];
    }    
}
