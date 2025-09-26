import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseTypeCountOutputTypeSelectSchema } from './ClauseTypeCountOutputTypeSelectSchema';

export const ClauseTypeCountOutputTypeArgsSchema: z.ZodType<Prisma.ClauseTypeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ClauseTypeCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ClauseTypeCountOutputTypeSelectSchema;
