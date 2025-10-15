import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionCreateWithoutChildrenInputSchema } from './SectionCreateWithoutChildrenInputSchema';
import { SectionUncheckedCreateWithoutChildrenInputSchema } from './SectionUncheckedCreateWithoutChildrenInputSchema';

export const SectionCreateOrConnectWithoutChildrenInputSchema: z.ZodType<Prisma.SectionCreateOrConnectWithoutChildrenInput> = z.strictObject({
  where: z.lazy(() => SectionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SectionCreateWithoutChildrenInputSchema), z.lazy(() => SectionUncheckedCreateWithoutChildrenInputSchema) ]),
});

export default SectionCreateOrConnectWithoutChildrenInputSchema;
