import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ServiceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ServiceOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default ServiceOrderByRelationAggregateInputSchema;
