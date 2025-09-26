import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseSelectSchema } from '../inputTypeSchemas/ClauseSelectSchema';
import { ClauseIncludeSchema } from '../inputTypeSchemas/ClauseIncludeSchema';

export const ClauseArgsSchema: z.ZodType<Prisma.ClauseDefaultArgs> = z.object({
  select: z.lazy(() => ClauseSelectSchema).optional(),
  include: z.lazy(() => ClauseIncludeSchema).optional(),
}).strict();

export default ClauseArgsSchema;
