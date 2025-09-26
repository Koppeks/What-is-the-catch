import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CompanyOrderByWithRelationInputSchema } from './CompanyOrderByWithRelationInputSchema';
import { ServiceDomainOrderByRelationAggregateInputSchema } from './ServiceDomainOrderByRelationAggregateInputSchema';

export const DomainOrderByWithRelationInputSchema: z.ZodType<Prisma.DomainOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  host: z.lazy(() => SortOrderSchema).optional(),
  note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional(),
  ServiceDomain: z.lazy(() => ServiceDomainOrderByRelationAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.DomainOrderByWithRelationInput>;

export default DomainOrderByWithRelationInputSchema;
