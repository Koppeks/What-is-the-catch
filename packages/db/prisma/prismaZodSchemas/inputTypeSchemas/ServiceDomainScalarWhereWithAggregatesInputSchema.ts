import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const ServiceDomainScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ServiceDomainScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ServiceDomainScalarWhereWithAggregatesInputSchema), z.lazy(() => ServiceDomainScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceDomainScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceDomainScalarWhereWithAggregatesInputSchema), z.lazy(() => ServiceDomainScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  domainId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  pathPattern: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
});

export default ServiceDomainScalarWhereWithAggregatesInputSchema;
