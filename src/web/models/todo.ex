defmodule Todos.Todo do
  use Todos.Web, :model

  schema "todos" do
    field :title, :string, null: false
    field :description, :string, null: false
    field :completed, :boolean, default: false

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:title, :description, :completed])
    |> validate_required([:title, :description, :completed])
  end
end
