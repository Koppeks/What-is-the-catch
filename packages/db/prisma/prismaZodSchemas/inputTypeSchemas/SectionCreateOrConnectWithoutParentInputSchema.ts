import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionCreateWithoutParentInputSchema } from './SectionCreateWithoutParentInputSchema';
import { SectionUncheckedCreateWithoutParentInputSchema } from './SectionUncheckedCreateWithoutParentInputSchema';

export const SectionCreateOrConnectWithoutParentInputSchema: z.ZodType<Prisma.SectionCreateOrConnectWithoutParentInput> = z.strictObject({
  where: z.lazy(() => SectionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SectionCreateWithoutParentInputSchema), z.lazy(() => SectionUncheckedCreateWithoutParentInputSchema) ]),
});

export default SectionCreateOrConnectWithoutParentInputSchema;
