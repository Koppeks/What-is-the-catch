import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const DomainScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DomainScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => DomainScalarWhereWithAggregatesInputSchema), z.lazy(() => DomainScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DomainScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DomainScalarWhereWithAggregatesInputSchema), z.lazy(() => DomainScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  host: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  note: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default DomainScalarWhereWithAggregatesInputSchema;
