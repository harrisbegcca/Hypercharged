class CreateHompepages < ActiveRecord::Migration[5.2]
  def change
    create_table :hompepages do |t|

      t.timestamps
    end
  end
end
