# frozen_string_literal: true

class PrintManager
  attr_reader :error

  def initialize
    @queue = []
  end

  def enqueue_print_job(document)
    @queue.push(document)
  end

  def show
    puts @queue
  end

  def dequeue
    print(@queue.shift)
  end

  private

  def print(document)
    puts document
  end
end

job = PrintManager.new

job.enqueue_print_job('doc 1')
job.enqueue_print_job('doc 2')
job.enqueue_print_job('Common Sense to Algo')

job.show
job.dequeue
job.dequeue
