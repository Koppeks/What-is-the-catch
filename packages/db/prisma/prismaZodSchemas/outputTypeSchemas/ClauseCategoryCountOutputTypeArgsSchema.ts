import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseCategoryCountOutputTypeSelectSchema } from './ClauseCategoryCountOutputTypeSelectSchema';

export const ClauseCategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.ClauseCategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ClauseCategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ClauseCategoryCountOutputTypeSelectSchema;
