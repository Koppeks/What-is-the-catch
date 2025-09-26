import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseTypeSelectSchema } from '../inputTypeSchemas/ClauseTypeSelectSchema';
import { ClauseTypeIncludeSchema } from '../inputTypeSchemas/ClauseTypeIncludeSchema';

export const ClauseTypeArgsSchema: z.ZodType<Prisma.ClauseTypeDefaultArgs> = z.object({
  select: z.lazy(() => ClauseTypeSelectSchema).optional(),
  include: z.lazy(() => ClauseTypeIncludeSchema).optional(),
}).strict();

export default ClauseTypeArgsSchema;
