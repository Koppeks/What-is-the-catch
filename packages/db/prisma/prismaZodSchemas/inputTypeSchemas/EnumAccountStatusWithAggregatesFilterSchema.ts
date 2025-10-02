import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountStatusSchema } from './AccountStatusSchema';
import { NestedEnumAccountStatusWithAggregatesFilterSchema } from './NestedEnumAccountStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumAccountStatusFilterSchema } from './NestedEnumAccountStatusFilterSchema';

export const EnumAccountStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAccountStatusWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => AccountStatusSchema).optional(),
  in: z.lazy(() => AccountStatusSchema).array().optional(),
  notIn: z.lazy(() => AccountStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountStatusSchema), z.lazy(() => NestedEnumAccountStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAccountStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAccountStatusFilterSchema).optional(),
});

export default EnumAccountStatusWithAggregatesFilterSchema;
